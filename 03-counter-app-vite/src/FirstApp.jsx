import Proptypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: "Milton Ponce",
    subTitle: "No hay subtitulo",
    // title: "No hay título",
}