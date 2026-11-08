import './App.css'
import { Folder, FileHeart, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react"
import { useState } from 'react'

function App() {
    const [isRootOpen, setIsRootOpen] = useState(true)

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
                        <div
                            className="folder-name"
                            onClick={() => setIsRootOpen(!isRootOpen)}>
                            {isRootOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />)}
                            theresa.portfolio
                        </div>

                        {isRootOpen && (
                            <div className="folder-content">

                            <div className="file active-file">
                                <FileHeart size={14} />
                                README.md
                            </div>

                            <div className="folder-name">
                                <ChevronRight size={14} />
                                <Folder size={14} />
                                about-me
                            </div>
                            <div className="folder-name">
                                <ChevronRight size={14} />
                                <Folder size={14} />
                                projects
                            </div>
                            <div className="folder-name">
                                <ChevronRight size={14} />
                                <Folder size={14} />
                                skills
                            </div>
                            <div className="folder-name">
                                <ChevronRight size={14} />
                                <Folder size={14} />
                                education
                            </div>
                            <div className="folder-name">
                                <ChevronRight size={14} />
                                <Folder size={14} />
                                experience
                            </div>

                            <div className="file">
                                <ArrowUpRight size={14} />
                                contact.md
                            </div>
                        </div>
                        )}
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
