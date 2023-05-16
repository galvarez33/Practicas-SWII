for $x in doc("ejercicio1.xml")/bib/book
 order by$x/price ascending
 return $x/title