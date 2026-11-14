import './App.css'
import { Folder, FileHeart, ChevronDown, ChevronRight, ArrowUpRight, X } from "lucide-react"
import { useState } from 'react'

function App() {
    const [isRootOpen, setIsRootOpen] = useState(true)
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
    const [isProjectsOpen, setIsProjectsOpen] = useState(false)
    const [isSkillsOpen, setIsSkillsOpen] = useState(false)
    const [isEducationOpen, setIsEducationOpen] = useState(false)
    const [isExperienceOpen, setIsExperienceOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState("README.md")
    const [openFiles, setOpenFiles] = useState(["README.md"])
    const fileContents = {
        "README.md": "Welcome to my portfolio!",
        "about-me.md": "A little about me...",
        "projects.md": "Here are my projects.",
        "skills.md": "My technical skills.",
        "education.md": "My education.",
        "experience.md": "My experience."
    }

    const openFile = (fileName) => {
        setSelectedFile(fileName)

        setOpenFiles((previousFiles) => {
            if (previousFiles.includes(fileName)) {
                return previousFiles
            }

            return [...previousFiles, fileName]
        })
    }

    const closeFile = (fileName) => {
        const updatedFiles = openFiles.filter((file) => file !== fileName)

        setOpenFiles(updatedFiles)

        if (selectedFile === fileName) {
            setSelectedFile(updatedFiles[updatedFiles.length - 1] || "")
        }
    }

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

                                <div
                                    className={selectedFile === "README.md" ? "file active-file" : "file"}
                                    onClick={() => openFile("README.md")}>
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
                                    <div
                                        className={selectedFile === "about-me.md" ? "file active-file" : "file"}
                                        onClick={() => openFile("about-me.md")}>
                                        <FileHeart size={14} />
                                        about-me.md
                                     </div>
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
                                    <div
                                        className={selectedFile === "projects.md" ? "file active-file" : "file"}
                                        onClick={() => openFile("projects.md")}>
                                        <FileHeart size={14} />
                                        projects.md
                                    </div>
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
                                    <div
                                        className={selectedFile === "skills.md" ? "file active-file" : "file"}
                                        onClick={() => openFile("skills.md")}>
                                        <FileHeart size={14} />
                                        skills.md
                                    </div>
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
                                    <div
                                        className={selectedFile === "education.md" ? "file active-file" : "file"}
                                        onClick={() => openFile("education.md")}>
                                        <FileHeart size={14} />
                                        education.md
                                    </div>
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
                                    <div
                                        className={selectedFile === "experience.md" ? "file active-file" : "file"}
                                        onClick={() => openFile("experience.md")}>
                                        <FileHeart size={14} />
                                        experience.md
                                    </div>
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
                <div className="editor-tabs">
                    {openFiles.map((file) => (
                        <div
                            key={file}
                            className={selectedFile === file ? "tab active-tab" : "tab"}
                            onClick={() => setSelectedFile(file)}
                        >
                            {file}

                            <button
                                className="close-tab"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    closeFile(file)
                                }}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="editor-content">
                    {fileContents[selectedFile]}
                </div>

            </main>

            </div>

            <footer className="status-bar">
                Status Bar
            </footer>
        </div>
    )
}

export default App
