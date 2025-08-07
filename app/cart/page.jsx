"use client";
import { removeFromCart, updateQuantity } from "@/lib/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [discountCode, setDiscountCode] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // جلوگیری از Hydration Error
  if (!mounted) return null;

  const handleQuantity = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box maxWidth="lg" mx="auto" my={5} px={2}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Bag
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        {totalItems} Items in the bag
      </Typography>

      <Grid container spacing={3}>
        {/* 🛒 آیتم‌های سبد خرید */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            {cartItems.length === 0 ? (
              <Typography textAlign="center" color="text.secondary" py={3}>
                Your cart is empty
              </Typography>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Box key={item.id} mb={2} pb={2} borderBottom="1px solid #ddd">
                    <Grid container spacing={2} alignItems="center">
                      {/* تصویر محصول */}
                      <Grid item xs={3}>
                        <img
                          src={item.image}
                          alt={item.text}
                          style={{
                            width: "200px",
                            height: "auto",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>

                      {/* عنوان و حذف */}
                      <Grid item xs={5}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {item.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.category}
                        </Typography>
                        <IconButton
                          onClick={() => removeItem(item.id)}
                          color="error"
                          size="small"
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Grid>

                      {/* قیمت */}
                      <Grid item xs={2}>
                        <Typography>${item.price.toFixed(2)}</Typography>
                      </Grid>

                      {/* تعداد */}
                      <Grid item xs={2}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleQuantity(item.id, -1)}
                          >
                            -
                          </Button>
                          <Typography>{item.quantity}</Typography>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleQuantity(item.id, 1)}
                          >
                            +
                          </Button>
                        </Box>
                        <Typography variant="body2" mt={1}>
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}

                {/* مجموع */}
                <Typography align="right" fontWeight="bold" variant="h6">
                  Subtotal: ${subtotal.toFixed(2)}
                </Typography>
              </>
            )}
          </Paper>
        </Grid>

        {/* 🎁 کد تخفیف */}
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Have a Discount Code?
              </Typography>
              <Box display="flex" gap={1}>
                <TextField
                  fullWidth
                  size="small"
                  label="Enter code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#a91f64",
                    "&:hover": { bgcolor: "#8a1b54" },
                  }}
                >
                  Apply
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
