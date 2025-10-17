module.exports = {
  headers: async () => [
    {
      source: '/resume.pdf',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/pdf',
        },
      ],
    },
  ],
}