import {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { getCats, getCategory } from '../../state/actions/actions';
import Cat from "../cats/Cat";
import styled from 'styled-components'

const StyledMainContent = styled.div`
    background: #e6e6e6;
    padding: 2%;
    text-align: center;
    min-height: 100vh
`
const StyledBoardItems = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
`
const StyledMoreItemsButton = styled.button`
    :active{
     background: #ffd11a
    }
    background: #ff8c1a;
    border: 1px solid #e6e6e6;
    color: #e6e6e6;
    font-size: 18px;
    padding: 22px 25px;
    border-radius: 5px;
    max-width: 180px;
    box-sizing: content-box;
    margin-top: 20px;
    cursor: pointer
`
function Main({ cats, getCats, category }) {

    const [limit, setLimit] = useState(10)

    const limitImage = () => {
        setLimit(limit + 10);
    }

    useEffect(() => {
        getCats(limit,category.id)
    }, [limit])
    return (
        <StyledMainContent>
            <StyledBoardItems>
                {cats && cats.map((item, index) => (
                    <Cat key={index.toString()} url={item.url} />
                ))}
            </StyledBoardItems>
            <StyledMoreItemsButton onClick={limitImage}>Load more images</StyledMoreItemsButton>
        </StyledMainContent>
    )
}

const mapStateToProps = (state) => ({
    cats: state.cats,
    category: state.category
})
const mapDispatchToProps = {
    getCats
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)