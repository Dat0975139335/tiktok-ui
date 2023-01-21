import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLauyout } from './components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map(({ component, path, layout }) => {
                        let Layout = DefaultLauyout;
                        if (layout) {
                            Layout = layout;
                        } else if (layout === null) {
                            Layout = Fragment;
                        }
                        return <Route key={path} path={path} element={<Layout>{component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
