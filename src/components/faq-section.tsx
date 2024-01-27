import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "Apa saja yang dikerjakan oleh Asosiasi Pemimpin Digital (APDI)?",
		answer: "APDI bertujuan untuk mewujudkan ekosistem kepemimpinan digital yang kondusif, serta membina kompetensi Anggota melalui upaya pembinaan, pengembangan, dan perlindungan, guna menunjang pembangunan digital ekonomi nasional dan mampu bersaing di tingkat global.",
	},
	{
		id: "item-2",
		question: "Bagaimana menghubungi APDI ?",
		answer: "Anda dapat melihat kontak kami di bagian footer, email kami di hai@pemimpindigital.id atau WA ke 08111 380 2734 / 0838 98888 168.",
	},
	{
		id: "item-3",
		question: "Kapan saja saya bisa menghubungi APDI?",
		answer: "Sekretariat kami buka pada hari Senin - Jumat, jam 9:00 pagi sampai 5:00 sore. Kontak melalui email dapat dilakukan setiap saat.",
	},
	{
		id: "item-4",
		question: "Bagaimana bergabung dengan APDI?",
		answer: "Semua alumni Digital Leadership Academy otomatis menjadi anggota APDI. Untuk keterangan lebih lanjut silakan kontak sekretariat kami.",
	},
	{
		id: "item-5",
		question: "Bagaimana menjadi partner APDI?",
		answer: "Silakan kontak sekretariat kami untuk menjalin kerjasama dengan APDI.",
	},
];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
