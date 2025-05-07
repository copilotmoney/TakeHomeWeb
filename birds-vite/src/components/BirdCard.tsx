const BirdCard = ({ bird }: { bird: Bird }) => {
  const { english_name, latin_name, thumb_url } = bird;
  return (
    <li className="flex flex-col gap-2">
      <div className="aspect-video rounded-lg overflow-hidden w-full">
        <img
          src={thumb_url}
          alt={`Picture for ${english_name}`}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div>
        <h3 className="font-medium">{english_name}</h3>
        <p className="text-accent text-sm">{latin_name}</p>
      </div>
    </li>
  );
};

export default BirdCard;
