import { CardItem } from "@/components/card";
import { Carrousel } from "@/components/carrousel";
import { CtaButton } from "@/components/cta-button";
import { Text } from "@/components/text";

const items: CardItem[] = [
  {
    id: "1",
    body: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    description: "10Kwh",
    imageUrl: "/assets/images/jane-cooper.jpeg",
    name: "Jane Cooper",
  },
  {
    id: "2",
    body: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    description: "32Kwh",
    imageUrl: "/assets/images/ralph-edwards.jpeg",
    name: "Ralph Edwards",
  },
  {
    id: "3",
    body: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    description: "6Kwh",
    imageUrl: "/assets/images/courtney-henry.jpeg",
    name: "Courtney Henry",
  },
  {
    id: "4",
    body: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    description: "12Kwh",
    imageUrl: "/assets/images/cameron-williamson.jpeg",
    name: "Cameron Williamson",
  },
  {
    id: "5",
    body: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    description: "12Kwh",
    imageUrl: "/assets/images/cameron-williamson.jpeg",
    name: "Cameron Williamson",
  },
];

export function Section5() {
  return (
    <section className="bg-primary flex flex-col gap-20 py-20">
      <div className="flex items-start justify-between px-20">
        <div className="flex flex-col justify-between max-w-[814px]">
          <Text variant="subheading" className="text-tertiary">
            Join other Sun harvesters
          </Text>
          <Text variant="heading" className="mt-2 mb-6 text-white">
            Make something awesome
          </Text>
          <Text variant="description" className="text-white">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </Text>
        </div>
        <CtaButton title="Request a Quote" className="mt-10" color="yellow" />
      </div>
      <Carrousel items={items} />
    </section>
  );
}
