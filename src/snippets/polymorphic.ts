import { Blog, CommentModel } from '../db';

CommentModel.findOne({
  include: [ {
    model: Blog, as: 'blog',
  }, {
    model: CommentModel, as: 'comment',
  } ],
}).then(blog => {
  console.log(blog.toJSON(), 'eager loading');
});


Blog.findOne({ include: [ { model: CommentModel } ] }).then(b => {
  console.log(b.toJSON(), 'blog including comments');
});


CommentModel.findOne().then(c => {
  return c.getCommentable();
}).then(r => {
  console.error(r, 'getCommentable()');
});
