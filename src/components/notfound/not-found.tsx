import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">
        The page you are looking for might be in another castle.
      </p>
      <p className="mt-4">
        <a href="/">Go to Home Page</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
