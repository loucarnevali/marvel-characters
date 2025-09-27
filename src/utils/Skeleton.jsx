import React from 'react';
import styled, { keyframes, useTheme, css } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const baseSkeleton = css`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.backgroundSkeleton} 25%,
    ${({ theme }) => theme.skeletonHighlight} 50%,
    ${({ theme }) => theme.backgroundSkeleton} 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const SkeletonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 20px 50px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  margin-bottom: 10px;

  &:first-child {
    margin-top: 3.5rem;
  }

  @media (max-width: 376px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    max-width: 90%;
    margin: 1rem auto;
  }
`;

const SkeletonImage = styled.div`
  width: 60px;
  height: 60px;
  ${baseSkeleton};
`;

const SkeletonName = styled.div`
  flex: 1.3;
  height: 14px;
  margin-right: 8rem;
  ${baseSkeleton};
`;

const SkeletonSeries = styled.div`
  flex: 2;
  height: 50px;
  ${baseSkeleton};
`;

const SkeletonEvents = styled.div`
  flex: 2;
  height: 50px;
  ${baseSkeleton};
`;

const Skeleton = () => {
  const theme = useTheme();

  return (
    <SkeletonCard>
      <SkeletonImage theme={theme} />
      <SkeletonName theme={theme} />
      <SkeletonSeries theme={theme} />
      <SkeletonEvents theme={theme} />
    </SkeletonCard>
  );
};

export default Skeleton;
