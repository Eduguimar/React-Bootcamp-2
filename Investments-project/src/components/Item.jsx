export default function Item({ children : data, date = false, value = false, percent = false }) {
  
  return (
    <>
    {date && (
      <span className="font-mono">
        {data}
      </span>
    )}
    {value && (
      <span className="flex-grow">
        {data}
      </span>
    )}
        {percent && (
      <span>
        {data}
      </span>
    )}
    </>
  )
}
