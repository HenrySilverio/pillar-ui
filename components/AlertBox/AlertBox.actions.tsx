import React from 'react';

export const SingleAction = (
  <button
    type="button"
    className="bg-primary text-white px-4 py-1 rounded-md text-sm font-bold"
  >
    Action
  </button>
);

export const DoubleActions = (
  <>
    <button
      type="button"
      className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-bold"
    >
      Action
    </button>
    <button
      type="button"
      className="bg-blue-100 text-blue-600 px-4 py-1 rounded-md text-sm font-bold"
    >
      Action
    </button>
  </>
);

export const SuccessActions = (
  <>
    <button
      type="button"
      className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-bold"
    >
      ✓ Action
    </button>
    <button
      type="button"
      className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-bold"
    >
      ✖ Action
    </button>
  </>
);