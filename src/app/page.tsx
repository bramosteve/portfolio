import Link from "next/link";
export default function Home() {
  return (
              <div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-center font-bold text-xl">
                            Alameda
                        </div>

                        <div className="flex justify-end space-x-6 text-lg">
                            <div>Bonjour</div>
                            <div>Ça va</div>
                            <div>Allo</div>
                        </div>
                    </div>

                 

                        <div className="h-screen pl-54 pt-44">
                                  <div className="flex space-x-4">
                                      <div>
                                          <Link href="/">Tops</Link>
                                      </div>
                                      <div>
                                          <Link href="/">Bottoms</Link>
                                      </div>
                                      <div>    
                                          <Link href="/about">Sale</Link>
                                      </div>
                                  </div>

                                  
                              </div>

                     
                </div>
           
  );
}
