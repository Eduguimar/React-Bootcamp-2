import {
    AiOutlineGithub as GitIcon,
    AiOutlineLinkedin as LinkIcon
  } from 'react-icons/ai';

export default function Footer() {
    function handleGitIconClick() {
        window.open('https://github.com/Eduguimar', '_blank');
    }

    function handleLinkIconClick() {
        window.open('https://www.linkedin.com/in/eduguimara/', '_blank');
    }

    return (
    <footer className="h-20 bg-gray-300 p-4 text-center">
        <p>App desenvolvido por <span className="font-semibold">Eduardo Guimarães</span></p>
            <span className="flex flex-row items-center justify-center space-x-4 mt-1">
                <GitIcon size={28} className="cursor-pointer" onClick={handleGitIconClick}/>
                <LinkIcon size={28} className="cursor-pointer" onClick={handleLinkIconClick} />
            </span>
    </footer>
    )
}
