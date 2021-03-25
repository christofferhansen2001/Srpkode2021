var eccmod = function(n, p) {
    if (n < 0) {
      return ((n % p) + p)
    } else {
      return (n % p)
    }
  }

var eccadd = function(xp, yp, xq, yq, p) {

    const c = yq - yp
    const m = (xq - xp) ** (p - 2)
    const lambda = (c * m) % p
    const x = eccmod(lambda ** 2 - xp - xq, p)
    const y = eccmod(lambda * (xp - x) - yp, p)

    return { x, y }
  }
var eccdouble = function (xp, yp, a, p) {

    const c = 3 * xp ** 2 + a
    const m = (2 * yp) ** (p - 2)
    const lambda = (c * m)% p
    const x = eccmod(lambda ** 2 - 2 * xp, p)
    const y = eccmod(lambda * (xp - x) - yp, p)

    return { x, y }
  }

var eccligsammen = function (d, xp, yp, a, p) {

    const add = (xp, yp, { x, y }) => eccadd(xp, yp, x, y, p)
    const double = (x, y) => eccdouble(x, y, a, p)
    const recur = ({ x, y }, m) => {
      if (m === 0) { return { x: 0, y: 0 } }
      if (m === 1) { return { x, y } }
      if (m % 2 === 1) { return add(x, y, recur({ x, y }, m - 1)) }
      return recur(double(x, y), m / 2)
    }
    return recur({ x: xp, y: yp }, d)
  }
              
 
  k = 19
  valg_k = { x: 0, y: 0}
  var chars = []
  var nB = 0
  var POm = 0
  var kPB = 0
  var POm_kPB = 0
  var kG = 0
  var cipherText = ""

  var nB = 139
  var nyOffentlig = 0

   

 
  var nB = $("#privatN").val()
  var offentligN = 0

  $(".knaphelle").click(function() {                
    var valg = 0
    valg = $(".knaphelle").val()

    POm = eccligsammen(valg, 4, 3, 1, 11)
    valg = POm                                  
    chars.push(valg, valg_k)                

    kPB = eccligsammen(k, offentligN.x, offentligN.y, 1, 11)
    

    POm_kPB = eccadd(POm.x, POm.y, kPB.x, kPB.y, 11)
   

    kG = eccligsammen(k, 3, 2, 1, 11)
    
	cipherText = "[ " + "(" + kG.x + ", " + kG.y + ")" + ", (" + POm_kPB.x + ", " + POm_kPB.y + ")" + " ]"

  
  })
