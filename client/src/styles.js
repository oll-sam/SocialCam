import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        margin: '20px 0',
        backgroundColor: '#F0D6BD',
    },
    header: {
        fontFamily: 'Helvetica',
        letterSpacing: '12px',
        color: '#142664',
    },
    image: {
        borderRadius: '50px',
        margin: '20px 10px 25px 0px',
    },
}));