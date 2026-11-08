import './App.css'
import { FileText, Folder, ChevronDown, ChevronRight } from "lucide-react"

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
                    <div className="explorer-header">
                        EXPLORER
                    </div>

                    <div className="folder">
                        <div className="folder-name">▾ theresa.portfolio</div>

                        <div className="folder-content">
                            <div className="file">📄 README.md</div>

                            <div className="folder-name">▸ about-me</div>
                            <div className="folder-name">▸ projects</div>
                            <div className="folder-name">▸ skills</div>
                            <div className="folder-name">▸ education</div>
                            <div className="folder-name">▸ experience</div>

                            <div className="file">📄 contact.md</div>
                        </div>
                    </div>
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
