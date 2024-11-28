import { useDispatch, useSelector } from "react-redux"
import { AddBlockButton, DashboardWrapper } from "../styles"
import NotesBlock from "./NotesBlock"
import { addBlock } from "../features/notesSlice"


const Dashboard = () => {
    const dispatch = useDispatch()
    const blocks = useSelector(state => state.notesReducer.blocks)

    const handleAddBlock = () => {
        dispatch(addBlock('New Block'))
    }

    return (
        <DashboardWrapper>
            <h2>Notes Dashboard</h2>
            <AddBlockButton onClick={handleAddBlock}>Add Block</AddBlockButton>
            <div className="blocks-container">
                {blocks.map((block) => (
                    <NotesBlock key={block.id} block={block} />
                ))}
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard