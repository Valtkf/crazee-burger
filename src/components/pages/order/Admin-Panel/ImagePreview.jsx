import styled from 'styled-components'
import { theme } from '../../../theme'

export default function ImagePreview({ imageSource, title }) {
    return (
        <ImagePreviewStyled>
            {imageSource ? (
                <img src={imageSource} alt={title} />
            ) : (
                <div className="empty-image">Aucune image</div>
                )}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100px;
            height: 100px;
            object-fit: contain;
            object-position: center;
        }

        .empty-image{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${theme.colors.greyLight};
            line-height: 1.5;
            color: ${theme.colors.greySemiDark};
            border-radius: ${theme.borderRadius.round};
        }
`