import './App.css'

function App() {
    return (
        <div className="app">
            <header className="top-navigation">
                theresa.dev
            </header>

            <div className="workspace">
                <aside className="activity-bar">
                    Activity Bar
                </aside>

                <aside className="file-explorer">
                    File Explorer
                </aside>

                <main className="editor">
                    Editor Area
                </main>
            </div>

            <footer className="status-bar">
                Status Bar
            </footer>
        </div>
    )
}

export default App
