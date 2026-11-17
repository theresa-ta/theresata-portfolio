import './App.css'
import { Folder, FileHeart, ChevronDown, ChevronRight, ArrowUpRight, X, Files, Search, CircleAlert, Lightbulb } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { useState, useRef } from 'react'

function App() {
    const [activeActivity, setActiveActivity] = useState("explorer")
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [isUpdatesOpen, setIsUpdatesOpen] = useState(false)
    const [updatesHeight, setUpdatesHeight] = useState(220)
    const resizeStartY = useRef(0)
    const resizeStartHeight = useRef(220)
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [suggestionMessage, setSuggestionMessage] = useState("")
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
    const [isRootOpen, setIsRootOpen] = useState(true)
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
    const [isProjectsOpen, setIsProjectsOpen] = useState(false)
    const [isSkillsOpen, setIsSkillsOpen] = useState(false)
    const [isEducationOpen, setIsEducationOpen] = useState(false)
    const [isExperienceOpen, setIsExperienceOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState("README.md")
    const [openFiles, setOpenFiles] = useState(["README.md"])
    const fileContents = {
        "README.md": ` 
        # Welcome to my portfolio!

        Hi, I'm Theresa.

        I'm a Computer Science student interested in software engineering, backend development, and building reliable systems.
        `,
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
            setSelectedFile(updatedFiles[updatedFiles.length - 1] || "README.md")

            if (updatedFiles.length === 0) {
                setOpenFiles(["README.md"])
            }
        }
    }

    const searchResults = Object.entries(fileContents).filter(([fileName, content]) =>
        fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const startResizing = (event) => {
        resizeStartY.current = event.clientY
        resizeStartHeight.current = updatesHeight

        const handleMouseMove = (moveEvent) => {
            const difference = resizeStartY.current - moveEvent.clientY

            const newHeight = resizeStartHeight.current + difference

            setUpdatesHeight(Math.min(Math.max(newHeight, 120), 500))
        }

        const stopResizing = () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", stopResizing)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", stopResizing)
    }

    const handleSuggestionSubmit = () => {
        if (!selectedCategory || !suggestionMessage.trim()) {
            return
        }

        setFeedbackSubmitted(true)
    }

    const handleSuggestionsClose = () => {
        setIsSuggestionsOpen(false)
        setSelectedCategory("")
        setSuggestionMessage("")
        setFeedbackSubmitted(false)
    }

    return (
        <div className="app">
            <header className="top-navigation">
                theresa.dev
            </header>

            <div className="workspace">
                <aside className="activity-bar">

                    <button
                        className={activeActivity === "explorer" ? "activity-icon active-activity" : "activity-icon"}
                        onClick={() => setActiveActivity("explorer")}
                    >
                        <Files size={22} />
                    </button>

                    <button
                        className={activeActivity === "search" ? "activity-icon active-activity" : "activity-icon"}
                        onClick={() => {
                            setActiveActivity("search")
                            setIsSearchOpen(!isSearchOpen)
                        }}
                    >
                        <Search size={22} />
                    </button>

                    <button
                        className={activeActivity === "problems" ? "activity-icon active-activity" : "activity-icon"}
                        onClick={() => {
                            setActiveActivity("problems")
                            setIsUpdatesOpen(!isUpdatesOpen)
                    }}
                    >
                        <CircleAlert size={22} />
                    </button>

                    <button
                        className={activeActivity === "suggestions" ? "activity-icon active-activity" : "activity-icon"}
                        onClick={() => {
                            setActiveActivity("suggestions")
                            setIsSuggestionsOpen(!isSuggestionsOpen)
                        }}
                    >
                        <Lightbulb size={22} />
                    </button>

                    <button
                        className={activeActivity === "github" ? "activity-icon active-activity" : "activity-icon"}
                        onClick={() => setActiveActivity("github")}
                    >
                        <SiGithub size={22} />
                    </button>
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

                {isSearchOpen && (
                    <div className="search-panel">
                        <div className="search-input-container">
                            <Search size={18} />

                            <input
                                type="text"
                                placeholder="Search..."
                                autoFocus
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                            />

                            <button onClick={() => setIsSearchOpen(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        {searchQuery && (
                            <div className="search-results">
                                {searchResults.length > 0 ? (
                                    searchResults.map(([fileName, content]) => (
                                        <div
                                            key={fileName}
                                            className="search-result"
                                            onClick={() => {
                                                openFile(fileName)
                                                setIsSearchOpen(false)
                                            }}
                                        >
                                            <div>{fileName}</div>
                                            <div className="search-result-preview">
                                                {content}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="no-results">
                                        No matching files found.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                <div className="editor-content">
                    {fileContents[selectedFile]}
                </div>

                {isUpdatesOpen && (
                    <div
                        className="updates-panel"
                        style={{ "--updates-height": `${updatesHeight}px`}}
                    >
                        <div
                            className="updates-resize-handle"
                            onMouseDown={startResizing}
                        ></div>

                        <div className="updates-header">
                            <span>UPDATES</span>

                            <button onClick={() => setIsUpdatesOpen(false)}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="updates-content">

                            <div className="update-section">
                                <h4>COMPLETED</h4>
                                <p>Portfolio interface and file explorer</p>
                                <p>Expandable folders and editor tabs</p>
                                <p>Search functionality</p>
                            </div>

                            <div className="update-section">
                                <h4>IN PROGRESS</h4>
                                <p>Developer updates panel</p>
                            </div>

                            <div className="update-section">
                                <h4>PLANNED</h4>
                                <p>Spring Boot backend integration</p>
                                <p>Database integration</p>
                            </div>

                        </div>
                    </div>
                )}

            </main>

            </div>

            <footer className="status-bar">
                Status Bar
            </footer>

            {isSuggestionsOpen && (
                <div className="suggestions-overlay">

                    <div className="suggestions-window">

                        <div className="suggestions-titlebar">
                            <span>Portfolio Feedback</span>

                            <button onClick={handleSuggestionsClose}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="suggestions-body">

                            <div className="suggestions-assistant">

                                <div className="assistant-avatar">
                                    🐶
                                </div>

                                <div className="assistant-message">
                                    <h3>Hey there!</h3>

                                    <p>
                                        Thanks for stopping by! Have an idea to make
                                        this portfolio better? I'd love to hear it.
                                    </p>
                                </div>
                            </div>

                            {feedbackSubmitted && (
                                <div className="feedback-success">
                                    <h3>Woof! Thank you! 🐾</h3>
                                    <p>Your feedback means a lot. Thanks for helping make this portfolio better!</p>
                                </div>
                            )}

                            {!feedbackSubmitted && (
                                <>
                                    <div className="feedback-categories">
                                        <h4>What's your feedback about?</h4>

                                        <div className="category-options">
                                            {["Design", "Functionality", "Content", "Other"].map((category) => (
                                                <button
                                                    key={category}
                                                    className={selectedCategory === category ? "selected-category" : ""}
                                                    onClick={() => setSelectedCategory(category)}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="feedback-message">
                                        <h4>Your suggestion</h4>

                                        <textarea
                                            placeholder="Share your thoughts..."
                                            rows={4}
                                            value={suggestionMessage}
                                            onChange={(event) => setSuggestionMessage(event.target.value)}
                                        />
                                    </div>

                                    <div className="feedback-submit">
                                        <button onClick={handleSuggestionSubmit}>
                                            Submit feedback <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </>
                            )}

                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default App
