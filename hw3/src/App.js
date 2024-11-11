
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { fetchPosts, setSearchTerm } from './redux/postsSlice';

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);
    const searchTerm = useSelector((state) => state.posts.searchTerm);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedPosts = filteredPosts.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Form>
                        <Form.Group controlId="search">
                            <Form.Label>Search by Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    {status === 'loading' ? (
                        <p>Loading...</p>
                    ) : status === 'failed' ? (
                        <p>{error}</p>
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sortedPosts.length > 0 ? (
                                sortedPosts.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No posts found</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
