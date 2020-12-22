import React, { useState, useEffect } from 'react'
import './styles.css'

import { Button, Container, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

import getRandomColor from './Color'
import { makeStyles } from '@material-ui/core/styles'
import { CSSTransition } from 'react-transition-group'

const useStyles = makeStyles({
  backgroundContainer: {
    background: `${getRandomColor()} no-repeat center center fixed`,
    backgroundSize: 'cover',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: '100%',
    border: `1px solid transparent`,
    boxSizing: 'border-box',
  },
  button: {
    border: 0,
    borderRadius: '5px',
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
    border: '1px solid white',
    borderRadius: '10px',
    background: 'white',
    padding: '40px 20px',
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
    border: '1px solid white',
    minHeight: 48,
    margin: 0,
    padding: 0,
    marginTop: 30,
  },
  tweetQuote: {
    width: 20,
    borderRadius: '5px',
    padding: '0 20px',
    color: 'white',
  },
})

function App() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [inProp, setInProp] = useState(false)
  const getData = () => {
    fetch('quotes.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getData()
  }, [])
  const color = getRandomColor()
  const length = data && data.quotes && data.quotes.length
  const quoteIndex = Math.round(Math.random() * length)
  const text = data && data.quotes && quoteIndex && data.quotes[quoteIndex].quote
  const author = data && data.quotes && quoteIndex && data.quotes[quoteIndex].author
  const handleClick = () => {
    setInProp((prevState) => !prevState)
  }
  return (
    <CSSTransition in={inProp} timeout={2000} classNames='my-node'>
      <Container
        id='background-container'
        className={classes.backgroundContainer}
        style={{ backgroundColor: `${color}` }}
      >
        <Container id='quote-box' className={classes.quoteBox}>
          <Typography id='text' variant='h4' style={{ color: `${color}` }}>
            <FormatQuoteIcon className={classes.quoteIcon}></FormatQuoteIcon>
            {text}
          </Typography>
          <Typography id='author' variant='h6' className={classes.author} style={{ color: `${color}` }}>
            {author}
          </Typography>
          <Container id='button-container' className={classes.buttonContainer}>
            <a
              id='tweet-quote'
              className={classes.tweetQuote}
              target='_top'
              href='https://www.twitter.com/intent/tweet'
              style={{ backgroundColor: `${color}` }}
            >
              <TwitterIcon></TwitterIcon>
            </a>
            <Button
              id='new-quote'
              onClick={handleClick}
              className={classes.button}
              variant='contained'
              style={{ backgroundColor: `${color}` }}
            >
              New Quote
            </Button>
          </Container>
        </Container>
      </Container>
    </CSSTransition>
  )
}

export default App
