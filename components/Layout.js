import Header2 from './Header';
import NextNprogress from 'nextjs-progressbar';

const layoutStyle = {
    padding: 20,
};

const Layout = props => (
    <div>
        <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs="200"
            height="3"
        />
        <header>Atlas Platzi</header>
        <Header2 />
        <div style={layoutStyle}>
            {props.children}
        </div>
        <style jsx>{`
            header {
            color: #fff;
            background: #567fca;
            padding: 15px;
            text-align: center;
          }
        `}
        </style>
    </div>
);

export default Layout;