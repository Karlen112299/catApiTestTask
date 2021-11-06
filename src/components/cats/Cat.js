import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledItem = styled.div`
    border-radius: 8px;
    max-height: 200px;
    max-width: 200px;
    object-fit: cover;
    box-shadow: 5px 10px 8px 10px #888888;
`

const StyledImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 8px;
    ${StyledItem}: hover & {
        box-shadow: 5px 10px 8px 10px #99ccff;
    }
`
const Cat = ({
    url,
}) => (
    <StyledItem>
        <StyledImage src={url} />
    </StyledItem>
)


Cat.propTypes = {
    url: PropTypes.string,
}

Cat.defaultProps = {
    url: ""
}

export default Cat