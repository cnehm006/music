import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f8f6f3;
  color: #222;
  font-family: 'Inter', sans-serif;
  padding: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

const Post = styled.article`
  width: 100%;
`;

const Timestamp = styled.time`
  display: block;
  font-size: 0.92rem;
  color: #7a7a9c;
  margin-bottom: 0.4rem;
  letter-spacing: 0.01em;
`;

const PostBody = styled.div`
  font-size: 1rem;
  line-height: 1.75;
  color: #333;
  text-align: left;

  p {
    margin: 0 0 1.1rem 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const posts = [
  {
    date: 'april 3, 2026 11:42 pm',
    content: [
      `I started this site before I ever watched Mr. Robot, which is why the comparison only made sense later. It began as a place to store songs I didn't want to lose. Over time, it took on a structure that resembles Elliot's CD collection: digital, public, and organized around memory rather than genre or taste.`,
      `The idea is simple. The songs are not background noise. They mark specific moments. Some are tied to people. Some to nights. Others point to earlier versions of me that only come back through a particular intro, a lyric, or the silence at the end of a track.`,
      `I built this without the reference, but the overlap holds. It is a small archive of songs that carry more than sound.`
    ]
  }
];

function Blog() {
  return (
    <Wrapper>
      <Title>blog</Title>
      <PostList>
        {posts.map((post, idx) => (
          <Post key={idx}>
            <Timestamp>{post.date}</Timestamp>
            <PostBody>
              {post.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </PostBody>
          </Post>
        ))}
      </PostList>
    </Wrapper>
  );
}

export default Blog; 