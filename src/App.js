import { Button, Container, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

import getRandomColor from './Color'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  backgroundContainer: {
    background: `${getRandomColor()} no-repeat center center fixed`,
    backgroundSize: 'cover',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: '100%',
    border: '1px solid rgb(20.8%, 53.4%, 20.8%)',
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
    height: '40%',
    border: '1px solid grey',
    borderRadius: '10px',
    background: 'white',
    padding: '40px 20px',
    overflow: 'visible',
  },
  text: {},
  quoteIcon: {
    fontSize: 70,
    height: 48,
  },
  author: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    border: '1px solid red',
    minHeight: 48,
    margin: 0,
    padding: 0,
    marginTop: 30,
  },
  tweetQuote: {
    width: 20,
    border: '1px solid blue',
    padding: '0 20px',
  },
})

function App() {
  const classes = useStyles()

  return (
    <Container id='background-container' className={classes.backgroundContainer}>
      <Container id='quote-box' className={classes.quoteBox}>
        <Typography id='text' variant='h2'>
          <FormatQuoteIcon className={classes.quoteIcon}></FormatQuoteIcon> Quote Text Here
        </Typography>
        <Typography id='author' variant='h6' className={classes.author}>
          Author
        </Typography>
        <Container id='button-container' className={classes.buttonContainer}>
          <a id='tweet-quote' className={classes.tweetQuote} target='_top' href='https://www.twitter.com/intent/tweet'>
            <TwitterIcon></TwitterIcon>
          </a>
          <Button id='new-quote' className={classes.button} variant='contained' color='primary'>
            New Quote
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

export default App
