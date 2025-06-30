import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Palette, Music, Heart, Calendar, Users, Scroll, Mountain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SpinningBlueRose from "./flower"
import { RomanticAudioPlayer } from "@/components/ui/romantic-audio-player"

export default function RomanticismWebsite() {
  const literaryWorks = [
    {
      title: "Die Leiden des jungen Werthers",
      author: "Johann Wolfgang von Goethe",
      year: "1774",
      description: "Ein Briefroman über unerfüllte Liebe und emotionale Intensität",
    },
    {
      title: "Der Sandmann",
      author: "E.T.A. Hoffmann",
      year: "1816",
      description: "Eine düstere Erzählung über Realität und Wahnsinn",
    },
    {
      title: "Hymnen an die Nacht",
      author: "Novalis",
      year: "1800",
      description: "Mystische Gedichte über Liebe, Tod und Transzendenz",
    },
  ]

  const artists = [
    {
      name: "Caspar David Friedrich",
      specialty: "Landschaftsmalerei",
      period: "1774-1840",
      famous: "Der Wanderer über dem Nebelmeer",
    },
    {
      name: "Eugène Delacroix",
      specialty: "Historienmalerei",
      period: "1798-1863",
      famous: "Die Freiheit führt das Volk",
    },
    {
      name: "Ludwig van Beethoven",
      specialty: "Komponist",
      period: "1770-1827",
      famous: "9. Symphonie",
    },
  ]

  const themes = [
    {
      icon: Heart,
      title: "Gefühl & Emotion",
      description: "Betonung von Emotionen, Leidenschaft und subjektiver Erfahrung",
    },
    {
      icon: Mountain,
      title: "Natur & Sublime",
      description: "Verehrung der Natur als Quelle der Inspiration und des Erhabenen",
    },
    {
      icon: Scroll,
      title: "Individualität",
      description: "Fokus auf das Individuum, Originalität und persönliche Ausdrucksformen",
    },
    {
      icon: BookOpen,
      title: "Mittelalter-Sehnsucht",
      description: "Romantisierung des Mittelalters und vergangener Epochen",
    },
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <h1 className="text-2xl font-bold text-gray-900">Romantik Epoche</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#station1" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station I
              </Link>
              <Link href="#station3" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station III
              </Link>
              <Link href="#station4" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station IV
              </Link>
              <Link href="#station5" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station V
              </Link>
              <Link href="#station6" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station VI
              </Link>
              <Link href="#station7" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station VII
              </Link>
              <Link href="#station8" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station VIII
              </Link>
              <Link href="#station10" className="text-gray-700 hover:text-rose-600 transition-colors">
                Station X
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-rose-100 text-rose-800">
            Kulturelle Epoche • 1795-1848
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Die{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Romantik</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Die Romantik ist eine bedeutende kulturelle, literarische und künstlerische Bewegung, die sich Ende des 18. Jahrhunderts in Europa entwickelte – zunächst in Deutschland und England, später auch in Frankreich und anderen Ländern. Sie entstand als Reaktion auf die Aufklärung und auf die politischen und gesellschaftlichen Umbrüche ihrer Zeit.
Die Aufklärung hatte den vernunftbetonten Menschen in den Mittelpunkt gestellt. Doch viele empfanden diese Sichtweise als kalt und einseitig. Die Romantik betonte deshalb Gefühle, Fantasie, Natur und Religion – als Gegenpol zur Rationalität und Technikorientierung.
Auch die Industrialisierung veränderte das Leben grundlegend: Viele Menschen fühlten sich durch Verstädterung und Maschinenarbeit entfremdet. Die Romantik reagierte mit einer Sehnsucht nach Ursprünglichkeit, nach einer engeren Verbindung zur Natur, Geschichte und Volkskultur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/downloads/alleStationen.pdf" download>
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              <BookOpen className="mr-2 h-5 w-5" />
              Download
            </Button>
            </a>
           {/* <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <Palette className="mr-2 h-5 w-5" />
              Kunst entdecken
            </Button>
            */}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="station1" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station I</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Der Blick auf das Jenseits
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Caspar David Friedrich: Der Mönch am Meer
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Bildanalyse</h3>
              <ul className="list-disc pl-5">
                 <li>
                  2/3 Himmel (hellere Farben)
                  </li>
                  <li>
                  ein Teil Meer
                  </li>
                  <li>
                  letzen 1/3 die Klippe (und dunklere Farben)
                  </li>
                  <li>
                  Himmel ist größer und ist über dem Menschen
                    </li>
                    <li>
                    Mensch im Mittelpunkt aber alles andere um ihn herum größer und einflussreicher
                    </li>
                    <li>
                    Mensch wirkt unbedeutend gegenüber der Naturkräfte
                    </li>
                    <li>
                    Himmel zeigt Sturm könnte aufbrechen
                    </li>
                    Mensch guckt Richtung Horizont
                    <li>
                    einzelne Person hängt ihren Gedanken nach aber um die Person herum ist etws was die Person sich nicht erklären kann
                      </li>
                      <li>
                      steht auf dem Boden der Tatsachen ist aber gedanklich bei der irrealen Welt die er sich nicht erklären kann
                      </li>
                      <li>
                      man selber ist im Zentrum aber es gibt ganz viel um einen herum was einen überwälttigen kann
                      </li>
                      <li>
                      Gedanke: was ist hinten am Horizont was ich mir nicht erklären kann
                      </li>
              </ul>
                          <h3 className="text-2xl font-semibold mb-4 mt-4 text-gray-900">Intepretation</h3>

              <ul className="list-disc pl-5 ">
                <li>
                Mensch das sieht nach Gewitter aus ich sollte rein gehen vlt regnet es gleich
                </li>
                <li>
                die Mächte der Natur lassen sich nicht kontrollieren
                  </li>
                  <li>
                  ich sollte einen Turm bauen um näher an Gott zu sein
                  </li>
                  <li>
                  ich sollte draußen bleiben um bei Gott zu bleiben
                  </li>
                  <li>
                  was ist dort oben in den Wolken
                  </li>
                  <li>
                  das Gewitter sind die Probleme des heilligen und ich muss mir die Probleme des heilligen
                  anhören
                  </li>
              </ul>

            </div>
            <div className="flex justify-center items-center relative" >
              <img
                src="/blauesMeer.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="station3" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station III</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Das romantische Gemüt

            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Achim von Arnim: Stolze Einsamkeit (1813)              
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center relative" >
              <img
                src="/achim.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Gedichtsanalyse</h3>
              <ul className="list-disc pl-5">
                 <li>
lyrisches Ich ungefähr 25-mal erwähnt
                  </li>
                  <li>
                  die Natur ist die Medizin des lyrischen Ich (S.1 V.5ff.)
                  </li>
                  <li>
                  lyrisches Ich hat paar Probleme mit dem es zu kämpfen hat (S.3 V.1)
                  </li> 
                  <li>
                {"lyrisches Ich ist einsam -> ist im Wald zuhause (S.3 V.3)"}
                    </li>
                    <li>
                    das lyrische Ich ist ein bisschen ich zietiere Linus hui hui (mit Hand schütteln vorm Kopf (Schere))
                    </li>
                    <li>
                    lyrisches Ich ist Selbstbewusst (cih stehe in mir, ich fühle mich groß)
                    </li>
                    <li>
                    Natur ist die Grundlage des Menschen
                    </li>
                    <li>
                    {"Erlösung des Menschen -> erweitert die Freiheit"}
                    </li>
                    <li>
                    Natur prägt den Charakter des Menschen
                    </li>

              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <section id="station4" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station IV</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sehnsucht nach dem Mittelalter

            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Otto Heinrich Graf von Loeben: das Mittelalter (1810)             
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center relative" >
              <img
                src="/mittelalter.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Typisch Mittelalter</h3>
              <ul className="list-disc pl-5">
                 <li>
                    Jagd weit verbreitete Tätigkeit (V.6)
                  </li>
                  <li>
                    {"natürliche unberührte Umgebung -> typische Landschaft (V.9)"}
                  </li>
                  <li>
                  Türme wesentlicher Bestandteil des Mittelalters (V.11)
                  </li> 
                  <li>
                    mittelalterliches Stadtleben (V.13)
                    </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <section id="station5" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station V</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Der Gegensatz von Klassik und Romantik

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Vergleich</h3>
              <p className="max-w-[70%]">Die Romantik ist unnatürlich, humorvoll und absurd. Es geht mehr um Schein als sein. Im Vergleich ist die Romantik 
                das Kranke im Gegensatz zur Klasik.
              </p>
              <h3 className="text-2xl font-semibold mb-4 mt-4 text-gray-900">Schegel & Goethe gleich:</h3>
              <ul className="list-disc pl-5">
                <li >Romantik humorvoll</li>
                <li>unnatürlich / Phantasie</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 mt-4 text-gray-900">Schegel & Goethe unterschiedlich:</h3>
              <ul className="list-disc pl-5 max-w-[70%]">
                <li>
                  Goethe differenziert
                </li>
                <li>
                  {"Schegel sagt Universalpoesie -> alles kann damit poesiert werden"}
                </li>
                <li>
                  {"Schegel romantische Dichtart nie vollendet -> entwickelt sich immer weiter (Dichter können damit machen was sie wollen)"}
                </li>
              </ul>
            </div>
 <div className="flex justify-center items-center gap-4 relative" >
              <img
                src="/gegensatz.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />

            </div>
            <div>
              <h3></h3>
            </div>
            <div className="flex justify-center items-center gap-4 relative" >
            <img
                src="/gegensatz2.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
              </div>
          </div>
          
        </div>
      </section>

      <section id="station6" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station VI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Märchen

            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Novalis: Märchen von Hyanzinth und Rosenblüt            
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="max-w-[70%]">
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Märchen</h3>
              <p>Es war einmal ein hübscher Bursche mit Namen Hyazinth. Er lebte mit seinen Eltern in einem Dorf im Westen. Er war freundlich und gutherzig, doch er sprach wenig mit anderen und ging lieber in den Wald und Berge, als mit anderen zu spielen oder Spaß zu haben. Dort sprach er mit Tieren, Bäumen oder Felsen. Doch er sprach kein vernünftiges Wort und blieb immer murrisch. Selbst Eichhörnchen, Meerkatze und Papagei versuchten, ihn auf den richtigen Weg zu bringen. Doch seine schüchterne Seite und die ernste Miene waren das größte Problem. Früher war er ein hübscher, netter Junge, er tanzte bei Festen und war bei den Mädchen beliebt. Doch besonders liebte er ein Mädchen. Sie war wunderschön und hatte Haare wie goldige Seide. Sie hieß Rosenblüte und er hatte sie zum Sterben lieb. Doch eines Tages geschah es, dass Hyazinth wie ausgewechselt nach Hause kam. Er erzählte von einer Frau im Wald, die ihm die Heilung an einem weit entfernten Ort versprach, und sagte seinen Eltern, sie sollten Rosenblütchen grüßen und wohl leben. Am nächsten Morgen war Hyazinth fort. Er lief durch, er ging durch Täler, über Berge und Ströme.
Der Weg war beschwerlich, oft regnete es, und dichter Nebel nahm ihm die Sicht. In der Wüste brannte ihm die Sonne auf den Kopf. Doch je weiter er ging, desto ruhiger wurde sein Herz. Mit der Zeit kam er in ein schönes Land mit Palmen, bunten Vögeln und süßen Früchten. Dort schlief er unter einem blühenden Baum ein, denn nur im Traum konnte er den Ort finden, den er suchte.
Im Traum trat er in einen prächtigen Palast mit vielen Sälen. Musik erklang, und alles war ihm fremd und doch vertraut. Dann stand er vor einer schönen Frau mit Schleier, und als er diesen hob, sah er sie : Rosenblüt!
Sie fiel ihm freudig in die Arme, und eine himmlische Musik erklang. Die beiden waren wieder vereint. Hyazinth kehrte mit Rosenblüt nach Hause zurück. Sie lebten glücklich bei seinen Eltern, und ihnen wurden viele Kinder und Enkel geboren. 
Und wenn sie nicht gestorben sind, dann leben sie noch heute.
              </p>
                <RomanticAudioPlayer src="/sounds/maerchen.mp3"></RomanticAudioPlayer>
            </div>
 <div className="flex justify-center items-center gap-4 relative" >
              <img
                src="/novalis.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            
          </div>
          
        </div>
      </section>

      <section id="station7" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station VII</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Der Traum von der blauen Blume

            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Novalis: Heinrich von Oftenerdingen. Der Traum von der blauen Blume             
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center relative" >
              <img
                src="/blaueBlume.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
            <div className="flex justify-start2">
              <SpinningBlueRose className="animate-spin "></SpinningBlueRose>
              </div>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Bedeutung blaue Blume</h3>
              <ul className="list-disc pl-5">
                 <li>
                    {"blaue Blume = Romantik -> in der er sich verliert / verliert sich in Phantasien"}
                  </li>
                  <li>
                  {"Verbindung von Traum & Wirklichkeit -> Blume erscheint im Traum -> im Leben aber fort"}
                  </li>
                  <li>
                  {"Romantik Sehnsucht nach Unendlichen -> nicht Besitz sondern streben (nach der  Blume)"}
                  </li> 
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      <section id="station8" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station VIII</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die romantische Weltanschauung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">romantische Weltanschauung</h3>
              <ol className="list-decimal list-inside marker:font-bold">
                 <li>
                    Unendlichkeit
                  </li>
                  <li>
                    Freiheit
                  </li>
                  <li>
                    Musik
                  </li>
              </ol>
            </div>
            <div className="flex justify-center items-center relative" >
              <img
                src="/einsetzen1.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <ol className="list-decimal list-inside marker:font-bold" start={4}>
                <li>
                  Ganzheit
                </li>
                <li>
                  Fantasie
                  </li>
                  <li>
                    Natur
                  </li>
                  <li>
                    Religion
                  </li>
                  <li>
                    Liebe
                  </li>
                  <li>
                    Zeitalter
                  </li>
                  <li>
                    Gefühl
                  </li>
                  <li>
                    Ursprünglichkeit
                  </li>
                  <li>
                    Kindheit
                  </li>
              </ol>
            <div className="flex justify-center items-center relative" >
              <img
                src="/einsetzen2.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="station10" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Station X</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Der Philister - das Gegenstück zum romantischen Helden

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center items-center relative" >
              <img
                src="/philister.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Philister (Novalis)</h3>
              <ul className="list-disc pl-5">
                 <li>
                    Leben nur von Gewohnheit zu Gewohnheit (Z.5 ff.)
                  </li>
                  <li>
                    es passiert nichts besonderes (Z.13 f.)
                  </li>
                  <li>
                    Sonntag in der Kirche (Z.20 f.)
                  </li> 
                  <li>
                    {"Sonntag keine Arbeit -> kann man machen was man will (Z.23 ff.)"}
                  </li>
                  <li>
                    außergewöhnliche Ereignisse (Z.28 f.)
                  </li>
                  <li>
                    {"=> Pflichtbewusstsein -> der Arbeit verschrieben"}
                  </li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Philister (Clemens Brentano)</h3>
              <ul className="list-disc pl-5">
                 <li>
                    passiert immer das Gleiche, deswegen auch keine Träume (Z.2 f.)
                  </li>
                  <li>
                      Teil der Gewohnheit (Z.10 ff.)
                  </li>
                  <li>
                    Rauchen ist der Höhepunkt des Tages (Z.19 f.)
                  </li>
              </ul>
            </div>
          </div>
          <h3></h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center relative" >
              <img
                src="/philister2.png"
                alt="Romantische Landschaft"
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
            <h3 className="text-2xl font-semibold mb-4 mt-3 text-gray-900">Leben eines Taugenichts</h3>
              <ul className="list-disc pl-5">
                 <li>
                    deutet auf seine Träumerei hin (Z.24)
                  </li>
                  <li>
                      trockene Bürokratie & geistige Enge (Z.26 f.)
                  </li>
                  <li>
                    {"Kleidung von Philisters -> Taugenichts übernimmt diese fast parodistisch (Z.30 ff.)"}
                  </li>
                  <li>
                    {"=> subtile Kritik an Welt der Philister -> Naturverbundenheit, Träumerische & Künstlerische des Taugenichts starker Kontrast"}
                    zur kalten Zweckhaftigkeit & Angepasstheit des Beamtentums & kleinbürgerlichen Welt
                  </li>
              </ul>
              </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
