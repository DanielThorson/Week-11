import articles from "./hackerNoonArticles";

const Card = (props) => {
  // console.log("Author:", articles.Programming[0].author);
  // console.log(articles.Programming[0].titleText);
  // console.log(articles.Programming[0].titleLink);
  console.log(Object.keys(articles));
  return (
    <div className="black">
      <div>
        <h3>{props.titleText}</h3>
        {props.titleText ? <div className="divider" /> : ""}
        {props.children}
        <p>{props.titleLink}</p>
        <div className="flex">
          <h3 className="margin-twenty">{props.author}</h3>
          <h4 className="margin-twenty">{props.userName}</h4>
        </div>
        <div className="flex">
          <h5 className="margin-twenty">{props.hashTag}</h5>
          <h5 className="margin-twenty">{props.readIn}</h5>
          <h6 className="margin-twenty">{props.posted}</h6>
        </div>
      </div>
    </div>
  );
};

const StoryCardContent = () => (
  <div className="black">
    <div></div>
    <h1>{Object.keys(articles)[0]}</h1>
    <div className="wrapper">
      {articles.Programming.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[1]}</h1>
    <div className="wrapper">
      {articles.Technology.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[2]}</h1>
    <div className="wrapper">
      {articles.Cryptocurrency.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[3]}</h1>
    <div className="wrapper">
      {articles.Javascript.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[4]}</h1>
    <div className="wrapper">
      {articles.Python.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[5]}</h1>
    <div className="wrapper">
      {articles.Blockchain.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[6]}</h1>
    <div className="wrapper">
      {articles.Gaming.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[7]}</h1>
    <div className="wrapper">
      {articles.Ai.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[8]}</h1>
    <div className="wrapper">
      {articles.Startup.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[9]}</h1>
    <div className="wrapper">
      {articles.React.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[10]}</h1>
    <div className="wrapper">
      {articles.Security.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[11]}</h1>
    <div className="wrapper">
      {articles.Slogging.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[13]}</h1>
    <div className="wrapper">
      {articles.Decentralization.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[14]}</h1>
    <div className="wrapper">
      {articles.Velo.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>

    <h1>{Object.keys(articles)[15]}</h1>
    <div className="wrapper">
      {articles.Hackernoon.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>
  </div>
);

export const Body = () => (
  <div className="center">
    <div className="cell inline">
      <StoryCardContent />
    </div>
  </div>
);
