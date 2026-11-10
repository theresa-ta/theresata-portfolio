import './App.css'
import { Folder, FileHeart, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react"
import { useState } from 'react'

function App() {
    const [isRootOpen, setIsRootOpen] = useState(true)
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
    const [isProjectsOpen, setIsProjectsOpen] = useState(false)
    const [isSkillsOpen, setIsSkillsOpen] = useState(false)
    const [isEducationOpen, setIsEducationOpen] = useState(false)
    const [isExperienceOpen, setIsExperienceOpen] = useState(false)


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

                            <div className="folder-name"
                                onClick={() => setIsAboutMeOpen(!isAboutMeOpen)}>
                                {isAboutMeOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />)}
                                <Folder size={14} />
                                about-me
                            </div>
                            {isAboutMeOpen && (
                                 <div className="folder-content">
                                    Testing about-me folder
                                 </div>
                            )}

                            <div className="folder-name"
                                onClick={() => setIsProjectsOpen(!isProjectsOpen)}>
                                {isProjectsOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />)}
                                <Folder size={14} />
                                projects
                            </div>
                            {isProjectsOpen && (
                                <div className="folder-content">
                                    Testing projects folder
                                </div>
                            )}

                            <div className="folder-name"
                                onClick={() => setIsSkillsOpen(!isSkillsOpen)}>
                                {isSkillsOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />)}
                                <Folder size={14} />
                                skills
                            </div>
                            {isSkillsOpen && (
                                <div className="folder-content">
                                    Testing skills folder
                                </div>
                            )}


                            <div className="folder-name"
                                onClick={() => setIsEducationOpen(!isEducationOpen)}>
                                {isEducationOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />)}
                                <Folder size={14} />
                                education
                            </div>
                            {isEducationOpen && (
                                <div className="folder-content">
                                    Testing education folder
                                </div>
                            )}

                            <div className="folder-name"
                                onClick={() => setIsExperienceOpen(!isExperienceOpen)}>
                                {isExperienceOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14}  />)}
                                <Folder size={14} />
                                experience
                            </div>
                            {isExperienceOpen && (
                                <div className="folder-content">
                                    Testing experience folder
                                </div>
                            )}

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
