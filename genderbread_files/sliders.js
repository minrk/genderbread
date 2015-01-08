function Randomize() {
	for (var $i = 0; $i < document.getElementsByTagName("input").length; $i++) {
		document.getElementsByTagName("input")[$i].value = Math.ceil(Math.random()*100);
	}

	AdjustIdentity();
	AdjustExpression(); 
	AdjustSex(); 
	AdjustAttraction(); 
	AdjustRomance(); 
}

function checkEmpty(el) {
    if (el.innerHTML.length === 0) {
        el.style.visibility = 'hidden';
    } else {
        el.style.visibility = 'visible';
    }
}


function checkIdentity() {
    checkEmpty(document.getElementById("Ident-Label"));
}
function checkExpression() {
    checkEmpty(document.getElementById("Expr-Label"));
}
function checkSex() {
    checkEmpty(document.getElementById("Bio-Label"));
}
function checkAttraction() {
    checkEmpty(document.getElementById("Attr-Label"));
}
function checkRomance() {
    checkEmpty(document.getElementById("Rom-Label"));
}

function AdjustIdentity() {
	var $F = parseInt(document.getElementById("Ident-F").value);
	var $M = parseInt(document.getElementById("Ident-M").value);
	var $label = document.getElementById("Ident-Label");

	if (($F>60 || $M>60) && Math.abs($F-$M) < 15) {
		$label.textContent = "Two-Spirit";
	} else if (($F>25 || $M>25) && Math.abs($F-$M) < 15) {
		$label.textContent = "Androgynous";
	} else if ($M>30 && $F>$M) {
		$label.textContent = "Masculine Woman";
	} else if ($F>30 && $M>$F) {
		$label.textContent = "Feminine Man";
	} else if ($M>25) {
		$label.textContent = "Man";
	} else if ($F>25) {
		$label.textContent = "Woman";
	} else { $label.textContent = "Agender or 3rd Gender"; }
    checkEmpty($label);
}

function AdjustExpression() {
	var $F = parseInt(document.getElementById("Expr-F").value);
	var $M = parseInt(document.getElementById("Expr-M").value);
	var $label = document.getElementById("Expr-Label");

	if (($F>75 || $M>75) && Math.abs($F-$M) < 20) {
		$label.textContent = "Genderbender";
	} else if (($F>50 || $M>50) && Math.abs($F-$M) < 15) {
		$label.textContent = "Genderqueer";
	} else if (($F>25 || $M>25) && Math.abs($F-$M) < 15) {
		$label.textContent = "Androgynous";
	} else if ($M>25 && $F>$M) {
		$label.textContent = "Tomboy";
	} else if ($F>25 && $M>$F) {
		$label.textContent = "Metrosexual";
	} else if ($F>75) {
		$label.textContent = "Hypefeminine";
	} else if ($M>75) {
		$label.textContent = "Hypemasculine"; 
	} else if ($F>25) {
		$label.textContent = "Feminine";
	} else if ($M>25) {
		$label.textContent = "Masculine";
	} else { $label.textContent = "Genderless"; }
    checkEmpty($label);
}

function AdjustSex() {
	var $F = parseInt(document.getElementById("Bio-F").value);
	var $M = parseInt(document.getElementById("Bio-M").value);
	var $label = document.getElementById("Bio-Label");

	if (($F>25 || $M>25) && Math.abs($F-$M) < 15) {
		$label.textContent = "Intersex";
	} else if ($M>25 && $F>$M) {
		$label.textContent = "Assumed Female";
	} else if ($F>25 && $M>$F) {
		$label.textContent = "Assumed Male";
	} else if ($F>30) {
		$label.textContent = "Female";
	} else if ($M>30) {
		$label.textContent = "Male";
	} else { $label.textContent = "Sexless"; }
    checkEmpty($label);
}

function AdjustAttraction() {
	var $F = parseInt(document.getElementById("Attr-F").value);
	var $M = parseInt(document.getElementById("Attr-M").value);
	var $O = parseInt(document.getElementById("Attr-O").value);
	var $label = document.getElementById("Attr-Label");

	if (($F>30 || $M>30 || $O>30) && Math.max($F,$M,$O)/Math.min($F,$M,$O)<2.5) {
		$label.textContent = "Pansexual";
	} else if (($F>30 || $M>30) && Math.max($F,$M)/Math.min($F,$M)<2) {
		$label.textContent = "Bisexual";
	} else if (($O>20 || $M>20) && $F>Math.max($O,$M)) {
		$label.textContent = "Mostly Gynesexual";
	} else if (($F>20 || $O>20) && $M>Math.max($F,$O)) {
		$label.textContent = "Mostly Androsexual";
	} else if (($F>20 || $M>20) && $O>Math.max($F,$M)) {
		$label.textContent = "Mostly Skoliosexual";
	} else if ($F>25) {
		$label.textContent = "Gynesexual";
	} else if ($M>25) {
		$label.textContent = "Androsexual";
	} else if ($O>25) {
		$label.textContent = "Skoliosexual";
	} else { $label.textContent = "Asexual"; }
    checkEmpty($label);
}

function AdjustRomance() {
	var $F = parseInt(document.getElementById("Rom-F").value);
	var $M = parseInt(document.getElementById("Rom-M").value);
	var $O = parseInt(document.getElementById("Rom-O").value);
	var $label = document.getElementById("Rom-Label");

	if (($F>30 || $M>30 || $O>30) && Math.max($F,$M,$O)/Math.min($F,$M,$O)<2.5) {
		$label.textContent = "Panromantic";
	} else if (($F>30 || $M>30) && Math.max($F,$M)/Math.min($F,$M)<2) {
		$label.textContent = "Biromantic";
	} else if (($O>20 || $M>20) && $F>Math.max($O,$M)) {
		$label.textContent = "Mostly Gyneromantic";
	} else if (($F>20 || $O>20) && $M>Math.max($F,$O)) {
		$label.textContent = "Mostly Androromantic";
	} else if (($F>20 || $M>20) && $O>Math.max($F,$M)) {
		$label.textContent = "Mostly Skolioromantic";
	} else if ($F>25) {
		$label.textContent = "Gyneromantic";
	} else if ($M>25) {
		$label.textContent = "Androromantic";
	} else if ($O>25) {
		$label.textContent = "Skolioromantic";
	} else { $label.textContent = "Aromantic"; }
    checkEmpty($label);
}


Randomize();