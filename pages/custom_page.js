export default function Page({ url }) {
  return <div>rendered with: {url}</div>;
}

Page.getInitialProps = (ctx) => {
  return { url: ctx.req.url };
};
