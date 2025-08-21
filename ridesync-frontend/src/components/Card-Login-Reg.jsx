// The dark color box(card) containing the content of lofin, regitration pages.

// This is a reusable React functional component called "Card-Login-Reg".
// It can wrap any content passed to it via "children" prop.


export default function Card({ children, className = "" }) {
    return (
        // The main div is the card container.
        // It uses Tailwind CSS classes for styling:
        // bg-[#088395] -> sets the background color (dark blue)
        // w-[450px] -> width of the card
        // h-[550px] -> height of the card
        // rounded-[20px]  -> medium rounded corners
        // flex flex-col -> makes it a flex container in column direction
        // items-center -> horizontally centers the content inside
        // ${className} -> allows additional custom classes to be passed from parent
        <div
            className={`bg-[#088395] w-[450px] h-[550px]  rounded-[20px]  flex flex-col items-center ${className}`}
        >
            {/* 
                {children} is a special React prop that represents
                any JSX or components you put between <Card> ... </Card>
                in the parent page. This allows this card to be reused
                with different content.
            */}
            {children}
        </div>
    );
}

