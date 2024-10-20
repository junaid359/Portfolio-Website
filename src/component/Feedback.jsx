import React from 'react';

const Feedback = ({ Source }) => {
  return (
    <div>
      <h2>Feedback</h2>
      <p className="text-md text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sunt autem
        consectetur laudantium laborum sint rerum recusandae ad! Tempora aliquam
        quidem obcaecati nesciunt! Cumque odit hic sit iusto iste excepturi.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Source} className="h-16" alt="Feedback Thumbnail" />
          <div>
            <h1 className="text-lg font-bold">JH Tech</h1>
            <p className="text-md text-gray-400">Software Engineer</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/assets/star.png" className="h-4" alt="Star" />
          <img src="/assets/star.png" className="h-4" alt="Star" />
          <img src="/assets/star.png" className="h-4" alt="Star" />
          <img src="/assets/star.png" className="h-4" alt="Star" />
          <img src="/assets/star.png" className="h-4" alt="Star" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
