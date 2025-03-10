const PartComponent = ({ part, exercises }: { part: string; exercises: number }) => {
  return (
    <p>
        {part} {exercises}
    </p>
  )
}

export default PartComponent