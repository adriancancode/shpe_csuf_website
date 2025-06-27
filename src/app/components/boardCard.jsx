
import '../styles/boardCard.css';

export default function BoardCard({ name, position, discord, linkedin }) {
    return (
        <div className="card-body">
            <div className='card-header'>
                <h3 className='name'>{name}</h3>
                <p className='position'>{position}</p>
            </div>
            <hr/>
            <div className='card-footer'>
                <div className='links'>
                    <a href={`https://discord.com/users/${discord}`} target="_blank" rel="noopener noreferrer">
                        Discord
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}