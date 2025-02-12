const FeatureCard = ({ title, subTitle, icon }) => {
  return (
    <div className="p-3 bg-[#F2F9FF] rounded-lg space-y-3 flex flex-col items-center">
      <div className="p-2 bg-amber-200 rounded">
        <img src={icon} className="h-6 " alt="" />
      </div>
      <h3 className="font-semibold text-black text-sm sm:text-lg">{title}</h3>
      <p className="text-muted-foreground text-black text-[12px] sm:text-[13px]">
        {subTitle}
      </p>
    </div>
  );
};

export default FeatureCard;
