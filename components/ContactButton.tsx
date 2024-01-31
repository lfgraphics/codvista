import { Button } from "@/components/ui/button";

const ContactButton = () => {
  return (
    <Button className="flex items-center justify-between  font-bold  transition-all duration-500 hover:w-[180px] origin-left">
      <span>Contact Us Now!</span>
      <span className="ml-3">&rarr;</span>
    </Button>
  );
};

export default ContactButton;
