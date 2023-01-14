import { Component } from 'react';

// import { Counter } from './Counter/Counter';
// import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { ArticleList } from './ArticleList/ArticleList';
import { fetchArticlesByTopic } from '../services/api';

export class App extends Component {
  state = {
    articles: [],
    topic: 'react',
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = await fetchArticlesByTopic(this.state.topic);
      this.setState({ articles, isLoading: false });
    } catch (error) {
      console.log('Error: ', error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  updateArticles = topic => {
    console.log('updateArticles', topic);
    this.setState({ topic, isLoading: true }, async () => {
      const articles = await fetchArticlesByTopic(this.state.topic);
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, topic, isLoading, error } = this.state;
    return (
      <>
        <h1>Working F I N E!</h1>
        <button
          onClick={() => {
            this.updateArticles('react');
          }}
        >
          React
        </button>
        <button
          onClick={() => {
            this.updateArticles('css');
          }}
        >
          CSS
        </button>
        <button
          onClick={() => {
            this.updateArticles('sex');
          }}
        >
          SEX
        </button>

        {error && <div>Something went wrong :(</div>}

        {isLoading ? (
          <p>Please wait...</p>
        ) : (
          <div>
            {articles.length > 0 && (
              <ArticleList articles={articles} topic={topic} />
            )}
          </div>
        )}

        {/* <div style={{ padding: '20px', border: '1px solid red' }}>
          {this.state.showCounter && (
            <ErrorBoundary>
              <Counter callWhenReady={() => console.log('OK Ready!!!')} />
            </ErrorBoundary>
          )}
        </div>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          Show/hide counter
        </button> */}
      </>
    );
  }
}
