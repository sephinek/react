export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercentage = Math.round((numPacked / numItems) * 100);
  const isAllPacked = numItems === numPacked;

  return (
    <footer className='stats'>
      <em>
        {isAllPacked
          ? 'You got everything! Ready to go ✈️'
          : numPacked < 1
          ? `💼 You have ${numItems} items on your list, Let's start packing! 🧳`
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${numPackedPercentage}%)`}
      </em>
    </footer>
  );
}
