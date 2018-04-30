import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'Orwell',
        covers: [
          'https://images.gr-assets.com/books/1348990566l/5470.jpg',
          'https://images.gr-assets.com/books/1504611957l/9577857.jpg'
        ],
        pages: 198
      },
      {
        goodreadsId: 2,
        title: 'Three men in a boat',
        authors: 'Jerome',
        covers: [
          'https://images.gr-assets.com/books/1348990566l/5470.jpg',
          'https://images.gr-assets.com/books/1504611957l/9577857.jpg'
        ],
        pages: 256
      }
    ]
  });
});

export default router;
