// NoteWrapper NoteContent DeleteButton
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
`;

export const HeaderLink = styled(Link)`
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold,

    &:hover {
        text-decoration: underline
    }
`

export const DashboardWrapper = styled.div`
    padding: 30px;
    text-align: center;

    .blocks-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px
    }
`;

export const NoteWrapper = styled.div`
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NoteContent = styled.div`
    font-size: 14px;
    text-align: left;
`;

export const DeleteButton = styled.button`
    background-color: #ff3b30;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px

    &:hover {
        background-color: #f53d3d
    }
`;

export const NotesBlockWrapper = styled.div`
    width: 250px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
`;

export const BlockTitle = styled.h3`
    margin-bottom: 10px;
    color: #333;
`;

export const AddNoteButton = styled.button`
    padding: 10px 24px;
    background-color: #4caf50;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #45a049;
    }
`;

export const AddBlockButton = styled.button`
    padding: 10px 24px;
    background-color: #4caf50;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #45a049;
    }
`;