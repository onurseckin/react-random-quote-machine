import { Button, Container, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  backgroundContainer: {
    background: 'grey no-repeat center center fixed',
    backgroundSize: 'cover',
    minWidth: '100vh',
    minHeight: '100vh',
    width: '100vh',
    height: '100vh',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  quoteBox: {
    display: 'flex',
    flexFlow: 'column wrap',
    margin: '20% auto',
    width: '50%',
    height: '30%',
    border: '1px solid grey',
    background: 'white',
    padding: 20,
  },
  text: {},
  author: {
    alignSelf: 'flex-end',
    width: 30,
  },
  buttonContainer: {
    display: 'flex',
    flexFlow: 'row no-wrap',
  },
})

function App() {
  const classes = useStyles()

  return (
    <Container id='background-container' className={classes.backgroundContainer}>
      <Container id='quote-box' className={classes.quoteBox}>
        <Typography id='text' variant='h2'>
          Quote Text Here
        </Typography>
        <Typography id='author' variant='body1' className={classes.author}>
          Author
        </Typography>
        <Container id='button-container' className={classes.buttonContainer}>
          <Button id='new-quote' className={classes.button} variant='contained' color='primary'>
            New Quote
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

export default App
