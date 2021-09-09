import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageAnimated, Loader } from '../../components';
import { postsActions } from '../../store/posts';
import './style.css';

export const DataList = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(postsActions.fetchPosts());
  }, []);

  return (
    <>
      <PageAnimated>
        <div className="data-list">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`block ${
                index % 2 === 0 ? 'block-right' : 'block-left'
              }`}
            >
              <span>{post.title}</span>
            </div>
          ))}
        </div>
      </PageAnimated>
      {loading && <Loader />}
    </>
  );
};
