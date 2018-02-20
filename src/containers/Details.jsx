// @flow
import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { UNITS } from '../constants';
import { DetailsGallery } from '../containers';
import { submitComment, requestComments } from '../actions';
import { selectorComments, selectorCommentsChecked } from '../selectors';
import {
  Details,
  DetailsClose,
  DetailsTitle,
  DetailsDescription,
  DetailsSpecification,
  DetailsPrice,
  CommentForm,
  CommentLabel,
  CommentArea,
  CommentButton,
  CommentBlock,
  CommentTime,
  CommentText,
} from '../styles';
import type { Product, Comment, State } from '../types';

type Props = {
  product: ?Product,
  comments: Array<Comment>,
  commentsChecked: boolean,
  submitComment: ({}) => void,
  requestComments: () => void,
};

const mapStateToProps = (state: State) => ({
  comments: selectorComments(state),
  commentsChecked: selectorCommentsChecked(state),
});

const mapDispatchToProps = {
  submitComment,
  requestComments,
};

const sortDesc = (first: Comment, second: Comment): number =>
  second.time - first.time;

const getDate = (time: number): string => new Date(time).toLocaleString();

class DetailsContainer extends PureComponent<Props> {
  componentDidMount() {
    const { commentsChecked } = this.props;
    if (!commentsChecked) {
      this.props.requestComments();
    }
  }

  @autobind
  handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target;
    if (
      !(form instanceof HTMLFormElement) ||
      !(form.elements.comment instanceof HTMLTextAreaElement)
    ) {
      return;
    }
    const text = form.elements.comment.value;
    const productID = this.props.product && this.props.product.id;
    const id = Math.floor((1 + Math.random()) * 0x10000).toString(16);
    const time = Date.now();
    this.props.submitComment({
      id,
      productID,
      text,
      time,
    });
    form.reset();
  }

  render() {
    const { product, comments } = this.props;
    return product ? (
      <Details>
        <DetailsClose>
          <Link to="/" />
        </DetailsClose>
        <DetailsGallery images={product.images} id={product.id} />
        <DetailsTitle>{product.title}</DetailsTitle>
        <DetailsPrice data-unit={`Price: ${UNITS.CURRENCY}`}>
          {product.price}
        </DetailsPrice>
        <DetailsDescription>{product.description}</DetailsDescription>
        <DetailsSpecification>{product.specification}</DetailsSpecification>
        <CommentForm onSubmit={this.handleSubmit}>
          <CommentLabel htmlFor="comment">Add a comment</CommentLabel>
          <CommentArea id="comment" name="comment" />
          <CommentButton value="Submit" />
        </CommentForm>
        <CommentBlock>
          {comments
            .filter(
              (comment: Comment): boolean => comment.productID === product.id,
            )
            .sort(sortDesc)
            .map((comment: Comment) => (
              <Fragment key={comment.id}>
                <CommentTime>{getDate(comment.time)}</CommentTime>
                <CommentText>{comment.text}</CommentText>
              </Fragment>
            ))}
        </CommentBlock>
      </Details>
    ) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
