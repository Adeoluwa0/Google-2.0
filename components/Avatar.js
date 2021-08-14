function Avatar({ url, className }) {
  return (
    <div>
      <img
        loading="lazy"
        src={url}
        alt="profile pic"
        className={`h-10 rounded-full cursor-pointer transition duration-150 
        transform hover:scale-x-110 ${className}`}
      />
    </div>
  );
}

export default Avatar;
