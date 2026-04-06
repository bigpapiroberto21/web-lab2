import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/8/comments") // заміни 1
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="text-gray-800 dark:text-gray-300 py-6">
      <h2 className="text-2xl mb-4 font-semibold">Reviews</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map(review => (
            <div
            key={review.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
            <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">{review.name}</h4>
            <p className="mb-2">{review.body}</p>
            <small className="text-gray-500 dark:text-gray-400">{review.email}</small>
            </div>
        ))}
      </div>
    </div>
  );
}