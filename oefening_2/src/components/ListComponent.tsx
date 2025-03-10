import ListItemComponent from "./ListItemComponent";

export interface Technology {
    id: number;
    name: string;
};

const ListComponent = ({ technologies }: { technologies: Technology[] }) => {
  return (
    <ul>
        {
            technologies.map(technology => <ListItemComponent key={technology.id} name={technology.name}/>)
        }
    </ul>
  )
}

export default ListComponent